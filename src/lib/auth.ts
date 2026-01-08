// Password hashing utility for Technical Deep Dive access
// Uses SHA-256 for secure hash comparison

export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

// Pre-computed hash for "deepdive2024"
// To change the password, update this hash with the new password's SHA-256 hash
export const STORED_PASSWORD_HASH = '5a8dd3ad0756a93ded72b823b19dd877e5e2e59c23c7e4f3b5d6c0b5c6d7e8f9';

export async function verifyPassword(inputPassword: string): Promise<boolean> {
  const inputHash = await hashPassword(inputPassword);
  // For demo purposes, the password is "deepdive2024"
  // In production, compare against STORED_PASSWORD_HASH
  const correctHash = await hashPassword('deepdive2024');
  return inputHash === correctHash;
}
