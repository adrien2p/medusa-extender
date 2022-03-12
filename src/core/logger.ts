import { blue, yellow } from 'chalk';

/**
 * @internal
 * Internal logger to display information about the build.
 */
export class Logger {
	private logsQueue = [];
	private readonly context: string;

	constructor(context: string) {
		this.context = context;
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
			`${blue(`[Server]      -`)} ${date}   ${yellow(`[${this.context}]`)} ${blue(description)}`,
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
			`${blue(`[Server]      -`)} ${date}   ${yellow(`[${this.context}]`)} ${blue(description)}`,
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
