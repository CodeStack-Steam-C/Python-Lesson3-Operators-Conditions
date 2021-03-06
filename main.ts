let random = 50
game.onUpdateInterval(1000, function on_update_interval() {
    let projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . c c c . . . . . .
        . . . . . . a b a a . . . . . .
        . . . . . c b a f c a c . . . .
        . . . . c b b b f f a c c . . .
        . . . . b b f a b b a a c . . .
        . . . . c b f f b a f c a . . .
        . . . . . c a a c b b a . . . .
        . . . . . . c c c c . . . . . .
        . . . . . . . c . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, randint(-random, random), randint(-random, random))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    
    if (info.score() < 100) {
        sprite.say(random)
        random += 1
    } else if (info.score() >= 100 && info.score() < 400) {
        sprite.say("in the middle")
        random *= 1.1
    } else {
        sprite.say("")
        random -= 1
    }
    
    sprite.startEffect(effects.spray, 500)
    info.changeScoreBy(1)
})
let sprite = sprites.create(img`
    4 4 4 . . 4 4 4 4 4 . . . . . .
    4 5 5 4 4 5 5 5 5 5 4 4 . . . .
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . .
    . b 5 5 5 5 1 1 5 5 1 1 5 4 . .
    . b d 5 5 5 5 5 5 5 5 1 1 5 4 .
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 .
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c
    . . c 4 4 d 4 4 4 4 4 d d 5 d c
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4
    . . . . c c b 4 4 4 b b 4 5 4 4
    . . . . . . c c c c c c b b 4 .
`, SpriteKind.Player)
sprite.setStayInScreen(true)
controller.moveSprite(sprite)
info.startCountdown(30)
