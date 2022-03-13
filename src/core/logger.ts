import { blue, red, yellow } from 'chalk';

/**
 * @internal
 * Internal logger to display information about the build.
 */
export class Logger {
	private logsQueue = [];
	private readonly _context: string;

	public get context() {
		return this._context;
	}

	constructor(context: string) {
		this._context = context;
	}

	static contextualize(context: string): Logger {
		return new Logger(context);
	}

	/**
	 * Push new logs to queue and then show them later on.
	 * @param description
	 * @param variables
	 */
	public push(description: string, ...variables: string[]): this {
		const date = new Date().toLocaleString('en-US', { hour12: true });
		this.logsQueue.push([
			`${blue(`[Server]      -`)} ${date}   ${yellow(`[${this._context}]`)} ${blue(description)}`,
			...variables,
		]);
		return this;
	}

	/**
	 * Display log immediately.
	 * @param description
	 * @param variables
	 */
	public log(description: string, ...variables: string[]): this {
		const date = new Date().toLocaleString('en-US', { hour12: true });
		console.log(
			`${blue(`[Server]      -`)} ${date}   ${yellow(`[${this._context}]`)} ${blue(description)}`,
			...variables
		);
		return this;
	}

	/**
	 * Display error logs in red immediately
	 * @param description
	 * @param variables
	 */
	public error(description: string, ...variables: string[]): this {
		const date = new Date().toLocaleString('en-US', { hour12: true });
		console.log(
			`${red(`[Server]      -`)} ${date}   ${red(`[${this._context}]`)} ${red(description)}`,
			...variables
		);
		return this;
	}

	/**
	 * Show all queues logs and then reset the queue.
	 */
	public flush(): this {
		if (this.logsQueue.length) {
			this.logsQueue.map((logArgs) => {
				console.log(...logArgs);
			});
			this.logsQueue.length = 0;
		}
		return this;
	}
}
