namespace game {

    /** New System */
    export class DragCardSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach([game.Draggable], (draggable) => {
                console.log(draggable.IsLocked);
            });
        }
    }
}
