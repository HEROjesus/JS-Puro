function addGuest() {
    const input = document.getElementById('guest-input');
    const guestName = input.value.trim();
    if (guestName === '') return;
    
    const guestList = document.getElementById('guest-list');
    const newGuest = document.createElement('div');
    newGuest.classList.add('guest');
    newGuest.textContent = guestName;
    guestList.appendChild(newGuest);
    
    input.value = '';
    input.focus();
}