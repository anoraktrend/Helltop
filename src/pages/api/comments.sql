-- Comments table schema for Cloudflare D1
CREATE TABLE IF NOT EXISTS comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  author TEXT NOT NULL,
  body TEXT NOT NULL,
  post_id TEXT NOT NULL,
  created_at TEXT NOT NULL,
  INDEX idx_post_id (post_id),
  INDEX idx_created_at (created_at)
);

-- Insert some sample data for testing
INSERT INTO comments (author, body, post_id, created_at) VALUES 
  ('Digital Nomad', 'Great post! This was really helpful.', 'test-post', '2024-01-01T10:00:00Z'),
  ('Tech Enthusiast', 'I learned something new today. Thanks for sharing!', 'test-post', '2024-01-02T14:30:00Z'),
  ('Anonymous User', 'Keep up the good work!', 'another-post', '2024-01-03T09:15:00Z');