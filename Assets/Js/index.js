function select() {
    var x = window.matchMedia("(max-width: 548px)")
    const val = document.querySelector('select').value;

    if (val == 'Discord') {
        document.getElementById('button').href = 'https://discord.com/users/871797700595687544';
    }

    else if (val == 'WhatsApp') {
        document.getElementById('button').href = 'https://web.whatsapp.com/send?phone=94755408993';

        if (x.matches) {
            document.getElementById('button').href = 'https://api.whatsapp.com/send?phone=94755408993&text=Hi!%20This%20message%20is%20for%20build%20a%20website';
        }
    }

    else if (val == 'Telegram') {
        document.getElementById('button').href = 'https://t.me/BinukaDS';
    }
}