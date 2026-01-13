async function checkGoogle(t=1000) { //设置超时时间
    const c = new AbortController();
    setTimeout(() => c.abort(), t);
    try {
        await fetch('https://youtube.com', {
            mode: 'no-cors',
            signal: c.signal
        });
        return 1;
    } catch {
        return 0;
    }
}
