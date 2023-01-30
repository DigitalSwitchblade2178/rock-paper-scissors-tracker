function Update_Score () {
    OLED.clear()
    OLED.writeStringNewLine("Player A" + Player_A)
    OLED.newLine()
    OLED.writeStringNewLine("Player B" + Player_B)
    OLED.newLine()
    OLED.writeStringNewLine("Ties" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds" + Rounds)
}
let Rounds = 0
let Ties = 0
let Player_B = 0
let Player_A = 0
OLED.init(128, 64)
Player_A = 0
Player_B = 0
Ties = 0
Rounds = 0
OLED.writeStringNewLine("Feel up for a game?")
basic.pause(2000)
Update_Score()
