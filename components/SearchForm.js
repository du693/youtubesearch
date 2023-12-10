"use client";

import { useState } from "react";
import styles from "./searchform.module.css";
import Image from "next/image";
function SearchForm() {
	const [query, setQuery] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Construct the YouTube search URL
		const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
			query
		)}`;
		// Redirect the browser to the YouTube search page
		window.location.href = youtubeUrl;
	};

	return (
		<div className={styles.searchForm}>
			<div>
				<Image src="/pngwing.com.png" height={50} width={150} />
			</div>
			<form onSubmit={handleSubmit} className={styles.formElement}>
				<input
					type="text"
					id="query"
					name="query"
					className={styles.inputElement}
					required
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit" className={styles.submitButton}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className={styles.searchSVG}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
				</button>
			</form>
		</div>
	);
}

export default SearchForm;
