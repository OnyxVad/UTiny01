namespace game {

    /** New System */
    export class DragCardSystem extends ut.ComponentSystem {
        OnUpdate(): void {
            let hitResult:ut.HitBox2D.HitTestResult;
            let mousePos2D = ut.Core2D.Input.getWorldInputPosition(this.world);
            let mousePos = new Vector3(mousePos2D.x, mousePos2D.y, 0);

            if(ut.Core2D.Input.getMouseButtonDown(0)){
                
                let camera = ut.HitBox2D.HitBox2DService.hitTestCamera(this.world, mousePos);
                hitResult = ut.HitBox2D.HitBox2DService.hitTest(this.world, mousePos, camera);

                if(!hitResult.entityHit.isNone()){
                    console.log("mouse down: " + this.world.getEntityName(hitResult.entityHit));
                    this.OnMouseDown(hitResult.entityHit);
                }
            }else if(ut.Core2D.Input.getMouseButtonUp(0)){
                let camera = ut.HitBox2D.HitBox2DService.hitTestCamera(this.world, mousePos);
                hitResult = ut.HitBox2D.HitBox2DService.hitTest(this.world, mousePos, camera);

                if(!hitResult.entityHit.isNone()){
                    console.log("mouse up: " + this.world.getEntityName(hitResult.entityHit));                    
                }
            }

            const displayInfo = this.world.getConfigData(ut.Core2D.DisplayInfo);
            let mouseScreenPosition = ut.Core2D.Input.getInputPosition();
            mouseScreenPosition.x -= displayInfo.frameWidth / 2;
            mouseScreenPosition.y -= displayInfo.frameHeight / 2;
            let draggables = 0;
            this.world.forEach([ut.Entity, game.Dragged, ut.UILayout.RectTransform], (entity, draggable, rectTransform) => {
                draggables++;
                rectTransform.anchoredPosition = mouseScreenPosition;

                if(ut.Core2D.Input.getMouseButton(0) == false){
                    this.OnMouseUp(entity);
                }
            });
            if(draggables > 0){
                console.log(draggables);
            }
        }

        OnMouseDown(e: ut.Entity){
            const oneWorld = ut.HTML.HTMLService.oneWorld() as ut.World;
            if(oneWorld.hasComponent(e, game.Dragged)){
                return;
            }

            oneWorld.addComponent(e, game.Dragged);
        }

        OnMouseUp(e: ut.Entity){
            const oneWorld = ut.HTML.HTMLService.oneWorld() as ut.World;
            if(oneWorld.hasComponent(e, game.Dragged) == false){
                return;
            }

            oneWorld.removeComponent(e, game.Dragged);
        }
    }
}
