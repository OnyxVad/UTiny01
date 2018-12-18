/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project Solitaire
 */

/**
 * @type {object}
 * @desc Map containing URLs for all assets.  If assets are included as base64 blobs, these will be data URLs.
 * @example var assetUrl = UT_ASSETS["MyCustomAsset"]
 */
var UT_ASSETS = {
    "cardBack_green3": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAC+CAYAAADncueYAAACy0lEQVR42u3XIXLCQBiG4b0BR+EKla3tBThCj1DbI9TVx9QmQSAiOAaDQGCCQ8Sk+Rm2AwxUtTAdnm/mFYDbPMNCSgerqmoy9Dk0i6bTaa/7Kz//vYVJOl1ZluPhg4XD0gVAizCyw1IUxaiu60180DRNv1wu+7Ztd9l9Lj//sBAmwkYYCStxDb1mLF3XOS07WpjIaMJKylfRer12OnZ2YSNfTSnfU2Y/LTsBxn4PzPP7o+4wYASMgBEwAkbAACNgBIyAETACRsAAI2AEjO4EzNPbg24YMAJGwAADDDDA3AiMfyB/EzACBhhggAEGGGCAAQYYASNggAEGGGCAAQYYYIARMAIGGGCAAQYYYIABBhgBI2CAAQYYYIABBhgBI2CAAQYYYIABBhhggBEwAgYYYIABBhhggAEGGAEjYIABBhhggAEGGGCAETAeLjDAAAMMMMAAA4yAETDAAAMMMMAAAwwwwAgYAQMMMMAAAwwwwAADjIARMMAAAwwwwAADDDDACBgPFxhggAEGGGCAAUbACBhggAEGGGCAAQYYYASMgAEGGGCAAQYYYIABRsAIGGCAAQYYYIABRsAIGGCAAQYYYIABBhhgBIyAAQYYYIABBhhggAFGwAgYYIABBhhggAEGGGAEjIABBhhggAEGGGAEjIABBhhggAEGGGCAAUbACBhggAEGGGCAAQYYYASMgAEGGGCAAQYYYIABRsB4uMAAAwwwwAADDDACRsAAAwwwwFwDjK4XMAJGwAADDDDAXAGM/m/ACBgBI2AEjIABRsAIGAEjYASMgAFGwAgY/SMwZhfBbLdbp2JnFzbCSF3Xm1RV1SxerFYrJ2NnFzbCSFhJZVm+xIumafqu65yOHS1MhI0wElZSURSjQc4i3pjP533btk7JdgsLYWL/7bIIKyk2yBnH/ZR/z0iHhY0wkg4XeoY3P8DRCZSP72+WYV+AHTkJhfEsRgAAAC10RVh0U29mdHdhcmUAYnkuYmxvb2RkeS5jcnlwdG8uaW1hZ2UuUE5HMjRFbmNvZGVyqAZ/7gAAAABJRU5ErkJggg=="
}

var UT_ASSETS_SETUP = function(world) {
    var arch0 = world.createArchetype(ut.Core2D.Image2D, ut.Core2D.Image2DLoadFromFile, ut.EditorExtensions.AssetReferenceTexture2D)
    var e0 = world.createEntity(arch0);
    world.setEntityName(e0, "assets/textures/cardBack_green3");
    var arch1 = world.createArchetype(ut.Core2D.Sprite2D, ut.EditorExtensions.AssetReferenceSprite)
    var e1 = world.createEntity(arch1);
    world.setEntityName(e1, "assets/sprites/cardBack_green3");
    var c0 = new ut.Core2D.Image2DLoadFromFile();
    c0.imageFile = "ut-asset:cardBack_green3";
    world.setComponentData(e0, c0);
    var c1 = new ut.Core2D.Image2D();
    c1.pixelsToWorldUnits = 0.01;
    world.setComponentData(e0, c1);
    var c2 = new ut.EditorExtensions.AssetReferenceTexture2D();
    c2.guid = "b4592d4fcdcbf024c99fdcd1f4708b2e";
    c2.fileId = 2800000;
    c2.type = 3;
    world.setComponentData(e0, c2);
    var c3 = new ut.Core2D.Sprite2D();
    c3.image = e0;
    var s0 = new ut.Math.Rect();
    s0.x = 0;
    s0.y = 0;
    s0.width = 1;
    s0.height = 1;
    c3.imageRegion = s0;
    var s1 = new ut.Math.Vector2();
    s1.x = 0.5;
    s1.y = 0.5;
    c3.pivot = s1;
    world.setComponentData(e1, c3);
    var c4 = new ut.EditorExtensions.AssetReferenceSprite();
    c4.guid = "b4592d4fcdcbf024c99fdcd1f4708b2e";
    c4.fileId = 21300000;
    c4.type = 3;
    world.setComponentData(e1, c4);
    return [e0, e1];
}


