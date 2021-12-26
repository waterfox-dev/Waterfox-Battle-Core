function launchTheme(themeName)
{
    var audio = new Audio(`../static/musics/${themeName}.ogg`);
    audio.loop = true;
    audio.play()
}