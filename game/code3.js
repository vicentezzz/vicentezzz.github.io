gdjs.New_32scene4Code = {};
gdjs.New_32scene4Code.GDPlantObjects1= [];
gdjs.New_32scene4Code.GDPlantObjects2= [];
gdjs.New_32scene4Code.GDPlayerObjects1= [];
gdjs.New_32scene4Code.GDPlayerObjects2= [];
gdjs.New_32scene4Code.GDBulletObjects1= [];
gdjs.New_32scene4Code.GDBulletObjects2= [];
gdjs.New_32scene4Code.GDPlayerHitBoxObjects1= [];
gdjs.New_32scene4Code.GDPlayerHitBoxObjects2= [];
gdjs.New_32scene4Code.GDTiledGrassPlatformObjects1= [];
gdjs.New_32scene4Code.GDTiledGrassPlatformObjects2= [];
gdjs.New_32scene4Code.GDPlayerBulletObjects1= [];
gdjs.New_32scene4Code.GDPlayerBulletObjects2= [];
gdjs.New_32scene4Code.GDbackgrpundObjects1= [];
gdjs.New_32scene4Code.GDbackgrpundObjects2= [];
gdjs.New_32scene4Code.GDNewObject6Objects1= [];
gdjs.New_32scene4Code.GDNewObject6Objects2= [];
gdjs.New_32scene4Code.GDNewObject8Objects1= [];
gdjs.New_32scene4Code.GDNewObject8Objects2= [];
gdjs.New_32scene4Code.GDNewObject7Objects1= [];
gdjs.New_32scene4Code.GDNewObject7Objects2= [];
gdjs.New_32scene4Code.GDcheatObjects1= [];
gdjs.New_32scene4Code.GDcheatObjects2= [];
gdjs.New_32scene4Code.GDstateObjects1= [];
gdjs.New_32scene4Code.GDstateObjects2= [];
gdjs.New_32scene4Code.GDNewObjectObjects1= [];
gdjs.New_32scene4Code.GDNewObjectObjects2= [];
gdjs.New_32scene4Code.GDNewObject2Objects1= [];
gdjs.New_32scene4Code.GDNewObject2Objects2= [];
gdjs.New_32scene4Code.GDNewObject3Objects1= [];
gdjs.New_32scene4Code.GDNewObject3Objects2= [];
gdjs.New_32scene4Code.GDNewObject4Objects1= [];
gdjs.New_32scene4Code.GDNewObject4Objects2= [];
gdjs.New_32scene4Code.GDNewObject5Objects1= [];
gdjs.New_32scene4Code.GDNewObject5Objects2= [];

gdjs.New_32scene4Code.conditionTrue_0 = {val:false};
gdjs.New_32scene4Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene4Code.condition1IsTrue_0 = {val:false};


gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.New_32scene4Code.GDNewObjectObjects1});gdjs.New_32scene4Code.eventsList0 = function(runtimeScene) {

{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32scene4Code.GDNewObject2Objects1});gdjs.New_32scene4Code.eventsList1 = function(runtimeScene) {

{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene3", false);
}}

}


};gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.New_32scene4Code.GDNewObject5Objects1});gdjs.New_32scene4Code.eventsList2 = function(runtimeScene) {

{


gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene4Code.GDNewObject5Objects1 */
{for(var i = 0, len = gdjs.New_32scene4Code.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDNewObject5Objects1[i].setString("Cheatmode:on");
}
}}

}


};gdjs.New_32scene4Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene4Code.GDNewObjectObjects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32scene4Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene4Code.GDNewObject2Objects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32scene4Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.New_32scene4Code.GDNewObject5Objects1);

gdjs.New_32scene4Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene4Code.mapOfGDgdjs_46New_9532scene4Code_46GDNewObject5Objects1Objects, runtimeScene, true, false);
}if (gdjs.New_32scene4Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32scene4Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.New_32scene4Code.GDNewObject7Objects1);
gdjs.copyArray(runtimeScene.getObjects("state"), gdjs.New_32scene4Code.GDstateObjects1);
{for(var i = 0, len = gdjs.New_32scene4Code.GDstateObjects1.length ;i < len;++i) {
    gdjs.New_32scene4Code.GDstateObjects1[i].setString((( gdjs.New_32scene4Code.GDNewObject7Objects1.length === 0 ) ? "" :gdjs.New_32scene4Code.GDNewObject7Objects1[0].getString()));
}
}}

}


};

gdjs.New_32scene4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene4Code.GDPlantObjects1.length = 0;
gdjs.New_32scene4Code.GDPlantObjects2.length = 0;
gdjs.New_32scene4Code.GDPlayerObjects1.length = 0;
gdjs.New_32scene4Code.GDPlayerObjects2.length = 0;
gdjs.New_32scene4Code.GDBulletObjects1.length = 0;
gdjs.New_32scene4Code.GDBulletObjects2.length = 0;
gdjs.New_32scene4Code.GDPlayerHitBoxObjects1.length = 0;
gdjs.New_32scene4Code.GDPlayerHitBoxObjects2.length = 0;
gdjs.New_32scene4Code.GDTiledGrassPlatformObjects1.length = 0;
gdjs.New_32scene4Code.GDTiledGrassPlatformObjects2.length = 0;
gdjs.New_32scene4Code.GDPlayerBulletObjects1.length = 0;
gdjs.New_32scene4Code.GDPlayerBulletObjects2.length = 0;
gdjs.New_32scene4Code.GDbackgrpundObjects1.length = 0;
gdjs.New_32scene4Code.GDbackgrpundObjects2.length = 0;
gdjs.New_32scene4Code.GDNewObject6Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject6Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject8Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject8Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject7Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject7Objects2.length = 0;
gdjs.New_32scene4Code.GDcheatObjects1.length = 0;
gdjs.New_32scene4Code.GDcheatObjects2.length = 0;
gdjs.New_32scene4Code.GDstateObjects1.length = 0;
gdjs.New_32scene4Code.GDstateObjects2.length = 0;
gdjs.New_32scene4Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene4Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene4Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject2Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject3Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject4Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject4Objects2.length = 0;
gdjs.New_32scene4Code.GDNewObject5Objects1.length = 0;
gdjs.New_32scene4Code.GDNewObject5Objects2.length = 0;

gdjs.New_32scene4Code.eventsList3(runtimeScene);
return;

}

gdjs['New_32scene4Code'] = gdjs.New_32scene4Code;
