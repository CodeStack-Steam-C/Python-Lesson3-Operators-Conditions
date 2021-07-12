random = 50

def on_update_interval():
    projectile = sprites.create_projectile_from_side(img("""
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
    """), randint(-random, random), randint(-random, random))
game.on_update_interval(1000, on_update_interval)

def on_on_overlap(sprite, otherSprite):
    global random
    if info.score() < 100:
        sprite.say(random)
        random += 1
    elif info.score() >= 100 and info.score() < 400:
        sprite.say("in the middle")
        random *= 1.1
    else:
        sprite.say("")
        random -= 1
    sprite.start_effect(effects.spray, 500)
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.Player, SpriteKind.projectile, on_on_overlap)

sprite = sprites.create(img("""
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
"""), SpriteKind.player)
sprite.set_stay_in_screen(True)
controller.move_sprite(sprite)
info.start_countdown(30)