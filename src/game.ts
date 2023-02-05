export enum Action {
    SCISSORS = 1,     
    PAPER,    
    ROCK, 
    LIZARD,   
    SPOCK,   
}

const ACTION_LENGTH = 5;

class ActionNode {
	constructor(
		public action: Action,
		public previous: ActionNode | null = null,
		public next: ActionNode | null = null
	) {}

	insertAfter(node: ActionNode) {
		this.next = node;
		node.previous = this;
		return node;
	}
}

class ActionNodeList {
	constructor(public startNode: ActionNode) {}

	findNodeByAction(action: Action) {
		let current: ActionNode = this.startNode;
		while (current.action !== action) {
			current = current.next as ActionNode;
		}
		return current;
	}

	findDistance(actionFrom: Action, actionTo: Action, type: 'forward' | 'backward') {
		switch (type) {
			case 'forward':
				return  this.getPositiveRemainder(actionTo - actionFrom, ACTION_LENGTH) ; 
			case 'backward':
				return this.getPositiveRemainder(actionFrom - actionTo, ACTION_LENGTH); 
			default:
				throw new Error('No such type.')
		}
	} 

	private getPositiveRemainder(num: number, actionLength: number) {
		return num < 0 ? (num + actionLength) % actionLength : num % actionLength;
	}
}

export const enum GameResult {
	WIN,
	LOSE,
	TIE,
}

class Game {
	nodeList: ActionNodeList | null;
	readonly actions: Action[] = [Action.SCISSORS, Action.PAPER, Action.ROCK, Action.LIZARD, Action.SPOCK];


	constructor() {
		const nodes = this.actions.map((action) => new ActionNode(action));
		const startNode = nodes.reduce(
			(prev, curr) => prev.insertAfter(curr),
			nodes[nodes.length - 1]
		);
		this.nodeList = new ActionNodeList(startNode);
	}

	generateOpponentAction() {
		const index = Math.floor(Math.random() * 5);
		return this.actions[index];
	}

	getResult(playerAction: Action, opponentAction: Action) {
		if (
			this.nodeList?.findDistance(playerAction, opponentAction, 'forward') === 1 ||
			this.nodeList?.findDistance(playerAction, opponentAction, 'forward') === 3
		) {
			return GameResult.WIN;
		} else if (
			this.nodeList?.findDistance(playerAction, opponentAction, 'backward') === 1 ||
			this.nodeList?.findDistance(playerAction, opponentAction, 'backward') === 3
		) {
			return GameResult.LOSE;
		}

		return GameResult.TIE;
	}
}

export const game = new Game();