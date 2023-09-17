const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    // waittng for the even triggered later
    window.deferredPrompt = event;
    // remove hidden class in button 
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    // if no event
    if (!promptEvent) {
        return;
    }
    // if prompt exist, show prompt
    promptEvent.prompt();
    // deferred prompt can be called once ,then reset variable
    window.deferredPrompt = null;
    // let button hid again
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => { window.deferredPrompt = null; });
