// JS Shortcuts: Ternary, Optional Chaining, Nullish Coalescing
const user = { 
  profile: { 
    name: 'Alice', 
    address: { city: 'Paris' } 
  } 
};
document.getElementById('content').innerHTML = `
  <h2>JS Shortcuts</h2>
  <p>City: ${user.profile?.address?.city ?? 'Unknown'}</p>
  <p>Status: ${user.profile.age > 18 ? 'Adult' : 'Minor'}</p>
`;
