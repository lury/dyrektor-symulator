import { scenarios, randomEvents, developmentOptions } from './scenarios2.js';
// import {consequences} from './scenarios.js';

export class Game {
    constructor() {
        this.state = {
            budget: 100,
            morale: 100,
            political: 100,
            reputation: 100,
            infrastructure: 0,
            innovation: 0,
            publicSatisfaction: 0,
            connections: 0,
            month: 1,
            achievements: new Set(),
            developmentPoints: 0,
            events: [],
            isGameOver: false,
            illegalActions: [],
            usedScenarios: new Set()
        };
        
        console.log('Game constructor started');
        this.initializeGame();
    }

    initializeGame() {
        console.log('Initializing game...');
        this.updateStats();
        this.addLogEntry("Rozpoczynasz pracę jako dyrektor instytucji kultury. Powodzenia!");
        this.showScenario();
    }

    updateStats() {
        // Aktualizacja głównych statystyk
        ['budget', 'morale', 'political', 'reputation'].forEach(stat => {
            document.getElementById(stat).textContent = `${this.state[stat]}%`;
            document.getElementById(`${stat}Progress`).value = this.state[stat];
        });

        // Aktualizacja statystyk specjalnych
        ['infrastructure', 'innovation', 'publicSatisfaction', 'connections'].forEach(stat => {
            document.getElementById(stat).textContent = this.state[stat];
        });

        // Aktualizacja punktów rozwoju
        document.getElementById('developmentPoints').textContent = this.state.developmentPoints;
    }

    addLogEntry(text) {
        const log = document.getElementById('eventLog');
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        entry.textContent = `Miesiąc ${this.state.month}: ${text}`;
        log.insertBefore(entry, log.firstChild);
    }

    checkRandomEvent() {
        randomEvents.forEach(event => {
            if (Math.random() < event.probability) {
                this.addLogEntry(`${event.title} - ${event.description}`);
                Object.entries(event.consequences).forEach(([stat, value]) => {
                    this.state[stat] = Math.min(100, Math.max(0, this.state[stat] + value));
                });
                this.updateStats();
            }
        });
    }

    checkAchievements() {
        const achievements = [
            {
                id: 'perfect_balance',
                condition: () =>
                    this.state.budget >= 80 &&
                    this.state.morale >= 80 &&
                    this.state.political >= 80 &&
                    this.state.reputation >= 80,
                title: "Perfekcyjny Balans",
                description: "Utrzymuj wszystkie główne statystyki powyżej 80%"
            },
            {
                id: 'innovator',
                condition: () => this.state.innovation >= 50,
                title: "Innowator",
                description: "Osiągnij poziom 50 w innowacjach"
            },
            {
                id: 'survivor',
                condition: () => this.state.month >= 12,
                title: "Przetrwaniec",
                description: "Przetrwaj pełny rok na stanowisku"
            }
        ];

        achievements.forEach(achievement => {
            if (!this.state.achievements.has(achievement.id) && achievement.condition()) {
                this.state.achievements.add(achievement.id);
                this.addLogEntry(`Osiągnięcie odblokowane: ${achievement.title}!`);
                this.showAchievementNotification(achievement);
            }
        });
    }

    showAchievementNotification(achievement) {
        const notification = document.createElement('div');
        notification.className = 'event';
        notification.innerHTML = `
            <div class="event-title">Nowe osiągnięcie!</div>
            <div>${achievement.title}</div>
            <div><small>${achievement.description}</small></div>
        `;
        document.getElementById('scenario').prepend(notification);
        setTimeout(() => notification.remove(), 5000);
    }

    makeChoice(consequences, choice) {
        console.log("Wybrano:", choice); // debugging

        if (choice.legalWarning) {
            console.log("Dodaję nielegalne działanie"); // debugging
            this.state.illegalActions.push({
                title: choice.text,
                description: `Miesiąc ${this.state.month}: ${choice.text}`,
                legalWarning: choice.legalWarning
            });
        }

        Object.entries(consequences).forEach(([stat, value]) => {
            this.state[stat] = Math.min(100, Math.max(0, this.state[stat] + value));
        });

        this.state.month++;
        this.state.developmentPoints++;

        this.checkRandomEvent();
        this.checkAchievements();
        this.updateStats();

        if (this.checkGameOver() || this.state.month > 12) {
            this.endGame();
        } else {
            this.showDevelopmentOptions();
            this.showScenario();
        }
    }

    checkGameOver() {
        const criticalStats = ['budget', 'morale', 'political', 'reputation'];
        const isCritical = criticalStats.some(stat => this.state[stat] <= 0);

        if (isCritical) {
            const failedStat = criticalStats.find(stat => this.state[stat] <= 0);
            this.addLogEntry(`Krytyczny poziom: ${failedStat}. Koniec gry!`);
            return true;
        }
        return false;
    }

    getAvailableScenario() {
        const unusedScenarios = scenarios.filter(s => !this.state.usedScenarios.has(s.id));
        if (unusedScenarios.length === 0) {
            this.state.usedScenarios.clear(); // Reset jeśli wszystkie zostały użyte
            return scenarios[Math.floor(Math.random() * scenarios.length)];
        }
        return unusedScenarios[Math.floor(Math.random() * unusedScenarios.length)];
    }

    showScenario() {
        console.log('Showing scenario');
        try {
            const scenario = this.getAvailableScenario();
            this.state.usedScenarios.add(scenario.id);
    
            console.log('Pełne dane scenariusza:', {
                id: scenario.id,
                text: scenario.text,
                choices: scenario.choices.map(choice => ({
                    text: choice.text,
                    hasWarning: !!choice.legalWarning,
                    warningContent: choice.legalWarning,
                    consequences: choice.consequences
                }))
            });
    
            document.getElementById('scenario').innerHTML = `
                <h2>Miesiąc ${this.state.month}</h2>
                <p>${scenario.text}</p>
            `;
    
            const choicesContainer = document.getElementById('choices');
            choicesContainer.innerHTML = '';
    
            scenario.choices.forEach((choice, index) => {
                const button = document.createElement('button');
                
                if (choice.legalWarning) {
                    button.classList.add('illegal-choice');
                }
    
                button.textContent = choice.text;
    
                if (choice.legalWarning) {
                    const warningSpan = document.createElement('span');
                    warningSpan.className = 'warning-icon';
                    warningSpan.textContent = '⚠️';

                    warningSpan.style.display = document.getElementById('obviousModeToggle').checked ? 'inline' : 'none';
                    button.appendChild(warningSpan);
                }
    
                // Zaktualizowany event listener
                button.addEventListener('click', () => {
                    console.log('Button clicked - pełne dane wyboru:', {
                        text: choice.text,
                        hasWarning: !!choice.legalWarning,
                        warningContent: choice.legalWarning,
                        consequences: choice.consequences
                    });
                    
                    if (choice.legalWarning) {
                        console.log('%c=== OSTRZEŻENIE PRAWNE ===', 'color: red; font-weight: bold');
                        console.log('%cWybrana opcja:', 'color: red', choice.text);
                        console.log('%cKonsekwencje prawne:', 'color: red');
                        console.log(choice.legalWarning);
                        console.log('%cKonsekwencje dla instytucji:', 'color: red', choice.consequences);
                        console.log('%c=========================', 'color: red; font-weight: bold');
                        
                        // Pokaż modal zamiast od razu wykonywać akcję
                        this.showLegalWarningModal(choice, () => this.makeChoice(choice.consequences, choice));
                    } else {
                        this.makeChoice(choice.consequences, choice);
                    }
                });
    
                choicesContainer.appendChild(button);
            });
    
            console.log('Scenario display completed');
        } catch (error) {
            console.error('Error in showScenario:', error);
            console.log('Current state:', this.state);
        }
    }


    handleChoice(index, consequences, choice) {
        console.log('Handle choice called with:', { index, consequences, choice });
        try {
            if (choice.legalWarning) {
                console.log('Legal warning detected:', choice.legalWarning);
                // Tymczasowo pomijamy modal i od razu wykonujemy akcję
                this.makeChoice(consequences, choice);
            } else {
                this.makeChoice(consequences, choice);
            }
        } catch (error) {
            console.error('Error in handleChoice:', error);
        }
    }


    showLegalWarningModal(choice, onConfirm) {
        // Sprawdź, czy istnieje już modal i usuń go
        const existingModal = document.querySelector('.legal-warning-modal');
        if (existingModal) {
            existingModal.remove();
        }

        // Stwórz nowy element dialog
        const modal = document.createElement('dialog');
        modal.className = 'legal-warning-modal';

        // Ustaw zawartość modalu
        modal.innerHTML = `
            <div class="modal-content">
                <h2>⚠️ Uwaga: Konsekwencje prawne</h2>
                <div class="warning-content">
                    <p>Ta decyzja może skutkować następującymi zarzutami:</p>
                    <pre>${choice.legalWarning}</pre>
                </div>
                <div class="modal-buttons">
                    <button class="cancel-btn">Anuluj</button>
                    <button class="confirm-btn">Kontynuuj mimo ryzyka</button>
                </div>
            </div>
        `;

        // Dodaj modal do dokumentu
        document.body.appendChild(modal);

        // Dodaj obsługę przycisków
        const cancelBtn = modal.querySelector('.cancel-btn');
        const confirmBtn = modal.querySelector('.confirm-btn');

        cancelBtn.addEventListener('click', () => {
            modal.close();
            modal.remove();
        });

        confirmBtn.addEventListener('click', () => {
            modal.close();
            modal.remove();
            if (typeof onConfirm === 'function') {
                onConfirm();
            }
        });

        // Pokaż modal
        modal.showModal();

        // Dodaj obsługę klawisza Escape
        modal.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                modal.close();
                modal.remove();
            }
        });

        // Dodaj obsługę kliknięcia poza modalem
        modal.addEventListener('click', (e) => {
            const rect = modal.getBoundingClientRect();
            const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
                rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
            if (!isInDialog) {
                modal.close();
                modal.remove();
            }
        });
    }

    showChoices(scenario) {
        document.getElementById('choices').innerHTML = scenario.choices.map((choice, index) => {
            const buttonHtml = `<button data-index="${index}" ${choice.legalWarning ? 'class="illegal-choice"' : ''}>
                ${choice.text}
                ${choice.legalWarning ? '<span class="warning-icon">⚠️</span>' : ''}
            </button>`;
            return buttonHtml;
        }).join('');

        // Dodaj obsługę kliknięć
        document.getElementById('choices').querySelectorAll('button').forEach((button, index) => {
            button.addEventListener('click', () => {
                const choice = scenario.choices[index];
                if (choice.legalWarning) {
                    this.showLegalWarningModal(choice, () => this.makeChoice(choice.consequences, choice));
                } else {
                    this.makeChoice(choice.consequences, choice);
                }
            });
        });
    }


    showDevelopmentOptions() {
        const container = document.getElementById('developmentOptions');
        if (!container) return;

        container.innerHTML = `
            <h3>Opcje Rozwoju (Punkty: ${this.state.developmentPoints})</h3>
            <div class="development-options">
                ${developmentOptions.map(option => `
                    <div class="development-option" onclick="game.developInstitution('${option.id}')">
                        <h4>${option.name}</h4>
                        <p>Koszt: ${option.cost} punktów</p>
                        <p><small>${Object.entries(option.effects)
                .map(([stat, value]) => `${stat}: ${value > 0 ? '+' : ''}${value}`)
                .join(', ')}</small></p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    developInstitution(optionId) {
        const option = developmentOptions.find(opt => opt.id === optionId);
        if (option && this.state.developmentPoints >= option.cost) {
            this.state.developmentPoints -= option.cost;
            Object.entries(option.effects).forEach(([stat, value]) => {
                this.state[stat] = Math.min(100, Math.max(0, this.state[stat] + value));
            });
            this.addLogEntry(`Zainwestowano w: ${option.name}`);
            this.updateStats();
            this.showDevelopmentOptions();
        }
    }

    calculateScore() {
        return Math.floor(
            (this.state.budget +
                this.state.morale +
                this.state.political +
                this.state.reputation) / 4 +
            (this.state.infrastructure +
                this.state.innovation +
                this.state.publicSatisfaction +
                this.state.connections) / 2
        );
    }

    getEndingMessage() {
        const score = this.calculateScore();
        if (score >= 90) return "Jesteś legendą zarządzania kulturą!";
        if (score >= 75) return "Świetna robota! Twoje zarządzanie było bardzo skuteczne.";
        if (score >= 50) return "Całkiem nieźle! Udało ci się utrzymać względną stabilność.";
        return "Cóż... przynajmniej spróbowałeś.";
    }

    endGame() {
        const score = this.calculateScore();
        console.log("Kończę grę, nielegalne akcje:", this.state.illegalActions); // debugging

        document.getElementById('scenario').innerHTML = `
            <div class="ending">
                <h2>Koniec gry!</h2>
                <p>${this.getEndingMessage()}</p>
                <p>Twój wynik: ${score} punktów</p>
                <p>Przetrwałeś ${this.state.month} miesięcy.</p>
                <div class="final-stats">
                    <h3>Końcowe statystyki:</h3>
                    <ul>
                        <li>Budżet: ${this.state.budget}%</li>
                        <li>Morale: ${this.state.morale}%</li>
                        <li>Poparcie polityczne: ${this.state.political}%</li>
                        <li>Reputacja: ${this.state.reputation}%</li>
                    </ul>
                </div>
                ${this.getLegalSummary()}
                <div class="achievements">
                    <h3>Odblokowane osiągnięcia:</h3>
                    ${Array.from(this.state.achievements).map(id =>
            `<div class="achievement">${id}</div>`
        ).join('')}
                </div>
                <button class="restart-button" onclick="location.reload()">Zagraj ponownie</button>
            </div>
        `;
    }

    getLegalSummary() {
        console.log("Nielegalne akcje:", this.state.illegalActions); // debugging
        const violations = this.state.illegalActions;
        if (!violations || violations.length === 0) {
            return `<div class="legal-summary clean">
                Gratulacje! Zarządzałeś(-aś) instytucją zgodnie z prawem.
            </div>`;
        }

        return `
            <div class="legal-summary violations">
                <h3>Podsumowanie naruszeń prawa:</h3>
                <div class="violations-summary">
                    ${violations.map((violation, index) => `
                        <div class="violation-entry">
                            <h4>Naruszenie ${index + 1}: ${violation.title}</h4>
                            <p>${violation.description}</p>
                            <pre>${violation.legalWarning}</pre>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

// Dodaj nasłuchiwanie na błędy globalne
window.addEventListener('error', function (event) {
    console.error('Global error caught:', event.error);
});

// Function to update visibility of warning icons based on 'obvious mode' checkbox
function updateWarningIcons() {
    const obviousMode = document.getElementById('obviousModeToggle').checked;

    // Update all choice buttons with a warning icon
    document.querySelectorAll('.choice-button .warning-icon').forEach(warningIcon => {
        warningIcon.style.display = obviousMode ? 'inline' : 'none';
    });
}

// Set up the event listener for the checkbox
document.getElementById('obviousModeToggle').addEventListener('change', updateWarningIcons);


// Inicjalizacja gry z obsługą błędów
// window.onload = function () {
//     console.log('Window loaded, initializing game');
//     try {
//         window.game = new Game();
//         console.log('Game instance created successfully');
//     } catch (error) {
//         console.error('Failed to create game instance:', error);
//     }
// };

// window.game = new Game();