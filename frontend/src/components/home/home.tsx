import styles from "./styles.module.css";
export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.newEventBox}>
				<h2>Create a New Event</h2>
				<label htmlFor="eventName">Event Name</label>
				<input id="eventName" type="text" placeholder="Event Name" />{" "}
				<label htmlFor="eventDate">Expiration Date</label>
				<input type="datetime-local" id="eventDate" />
				<button>Create</button>
			</div>
		</main>
	);
}
