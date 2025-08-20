pkg update && pkg upgrade -y
pkg install python ffmpeg -y
pip install yt-dlp

nano ~/.bashrc

H() {
    if [ -z "$1" ]; then
        echo "Usage: H <YouTube_URL>"
        return 1
    fi
    yt-dlp -f "bestvideo+bestaudio/best" --merge-output-format mp4 "$1"
}


nano ~/.zshrc


source ~/.bashrc

window.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll('.fade-in');

  fadeEls.forEach((el, index) => {
    el.style.opacity = '1'; // Fallback in case animation fails
    el.style.transform = 'scale(1)';
    el.style.animation = `fadeInScale var(--fade-duration) ease forwards`;
    el.style.animationDelay = `${0.1 + index * 0.1}s`;
  });
});

function triggerAnimation() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => {
    el.classList.remove('fade-in');
    void el.offsetWidth; // Reflow
    el.classList.add('fade-in');
  });
}
