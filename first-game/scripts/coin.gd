extends AnimatedSprite2D
@onready var animation_player: AnimationPlayer = $"../AnimationPlayer"

func _on_coin_body_entered(body: Node2D) -> void:
	Scorekeeper.add_point()
	animation_player.play("pickup_animation")
	#queue_free()
