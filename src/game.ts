export type Action = 'scissors' | 'paper' | 'rock' | 'lizard' | 'spock';

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

	findForwardDistance(action1: Action, action2: Action) {
		if (action1 === action2) {
			return 0;
		}

		const action1Node = this.findNodeByAction(action1);
		let current = action1Node;
		let distance = 0;

		while (current.action !== action2) {
			current = current.next as ActionNode;
			distance++;
		}

		return distance;
	}
	
	findBackwardDistance(action1: Action, action2: Action) {
		if (action1 === action2) {
			return 0;
		}

		const action1Node = this.findNodeByAction(action1);
		let current = action1Node;
		let distance = 0;

		while (current.action !== action2) {
			current = current.previous as ActionNode;
			distance++;
		}

		return distance;
	}
}

export const enum GameResult {
	WIN,
	LOSE,
	TIE,
}

class Game {
	nodeList: ActionNodeList | null;
	readonly actions: Action[] = ['scissors', 'paper', 'rock', 'lizard', 'spock'];

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
			this.nodeList?.findForwardDistance(playerAction, opponentAction) === 1 ||
			this.nodeList?.findForwardDistance(playerAction, opponentAction) === 3
		) {
			return GameResult.WIN;
		} else if (
			this.nodeList?.findBackwardDistance(playerAction, opponentAction) === 1 ||
			this.nodeList?.findBackwardDistance(playerAction, opponentAction) === 3
		) {
			return GameResult.LOSE;
		}

		return GameResult.TIE;
	}
}

export const game = new Game();
