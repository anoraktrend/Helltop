CREATE TABLE IF NOT EXISTS `comments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`author` text NOT NULL,
	`body` text NOT NULL,
	`post_id` text NOT NULL,
	`published_at` integer DEFAULT (strftime('%s', 'now')) NOT NULL
);
