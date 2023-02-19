import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import { SocialMediaEntity } from "types/gql-api";
import { SocialMediaIcons } from "../social-media-icons/social-media-icons";
import styles from "./navigation.module.sass";

export interface NavigationProps {
	socialMediaLinks: SocialMediaEntity[];
}

export const Navigation = ({ socialMediaLinks }: NavigationProps) => {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	return (
		<>
			<nav className={classNames(styles.navigation, mobileNavOpen && styles.open)}>
				<div className={styles.navItems}>
					<a onClick={() => setMobileNavOpen(false)} href="#home">
						Home
					</a>
					<a onClick={() => setMobileNavOpen(false)} href="#about">
						About
					</a>
					<a onClick={() => setMobileNavOpen(false)} href="#live">
						Live
					</a>
					<a onClick={() => setMobileNavOpen(false)} href="#audio">
						Audio
					</a>
					<a onClick={() => setMobileNavOpen(false)} href="#photos">
						Photos
					</a>
					<a
						onClick={() => setMobileNavOpen(false)}
						href="https://therhino.bandcamp.com/releases"
						target="_blank"
						rel="noreferrer">
						Store
					</a>
				</div>
				<SocialMediaIcons socialMediaLinks={socialMediaLinks} className={styles.socialMediaIcons} />
				<div className={styles.navBg}></div>
			</nav>
			<button
				onClick={() => setMobileNavOpen(!mobileNavOpen)}
				className={classNames(styles.navIcon, mobileNavOpen && "active", "hamburger hamburger--collapse")}
				id="nav-toggle"
				aria-label="Button to open navigation menu">
				<div className="inner">
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</div>
			</button>
		</>
	);
};