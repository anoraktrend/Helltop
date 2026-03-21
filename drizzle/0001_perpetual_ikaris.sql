PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_comments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`author` text NOT NULL,
	`body` text NOT NULL,
	`post_id` text NOT NULL,
	`published_at` integer NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_comments`("id", "author", "body", "post_id", "published_at") SELECT "id", "author", "body", "post_id", "published_at" FROM `comments`;--> statement-breakpoint
DROP TABLE `comments`;--> statement-breakpoint
ALTER TABLE `__new_comments` RENAME TO `comments`;--> statement-breakpoint
PRAGMA foreign_keys=ON;