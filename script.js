document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // デフォルトの送信を防ぐ
    alert('メッセージが送信されました！');
});
