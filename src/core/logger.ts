import { blue, red, yellow } from 'chalk';

/**
 * @internal
 * Internal logger to display information about the build.
 */
export class Logger {
	private logsQueue = [];
	private readonly _context: string;
	private readonly _app: string;

	public get context() {
		return this._context;
	}

	public get app() {
		return this._app;
	}

	constructor(context: string, app: string) {
		this._context = context;
		this._app = app;
	}

	static contextualize(context: string, app: string = 'Server'): Logger {
		return new Logger(context, app);
	}

	/**
	 * Push new logs to queue and then show them later on.
	 * @param description
	 * @param variables
	 */
	public push(description: string, ...variables: string[]): this {
		const date = new Date().toLocaleString('en-US', { hour12: true });
		this.logsQueue.push([
			`${blue(`[${this._app}]      -`)} ${date}   ${yellow(`[${this._context}]`)} ${blue(description)}`,
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
		return this.buildLog(blue, description, ...variables);
	}

	/**
	 * Display warning immediately.
	 * @param description
	 * @param variables
	 */
	public warn(description: string, ...variables: string[]): this {
		return this.buildLog(yellow, description, ...variables);
	}

	/**
	 * Display error logs in red immediately
	 * @param description
	 * @param variables
	 */
	public error(description: string, ...variables: string[]): this {
		return this.buildLog(red, description, ...variables);
	}

	/**
	 * display all queues logs and then reset the queue.
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

	/**
	 * Build logs taking in count the level color
	 * @param color
	 * @param description
	 * @param variables
	 */
	private buildLog(color: Function, description: string, ...variables: string[]) {
		const date = new Date().toLocaleString('en-US', { hour12: true });
		console.log(
			`${blue(`[${this._app}]      -`)} ${date}   ${yellow(`[${this._context}]`)} ${color(description)}`,
			...variables
		);
		return this;
	}
}
