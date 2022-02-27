function select() {
    const val = document.querySelector('select').value;
    if (val == 'Discord') {
        document.getElementById('button').href = 'https://discord.com/users/871797700595687544';
    }

    else if (val == 'WhatsApp') {
        document.getElementById('button').href = 'https://web.whatsapp.com/send?phone=94755408993';
    }

    else if (val == 'Telegram') {
        document.getElementById('button').href = 'https://t.me/BinukaDS';
    }
}