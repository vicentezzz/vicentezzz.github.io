gdjs.New_32scene2Code = {};
gdjs.New_32scene2Code.GDPlantObjects1= [];
gdjs.New_32scene2Code.GDPlantObjects2= [];
gdjs.New_32scene2Code.GDPlayerObjects1= [];
gdjs.New_32scene2Code.GDPlayerObjects2= [];
gdjs.New_32scene2Code.GDBulletObjects1= [];
gdjs.New_32scene2Code.GDBulletObjects2= [];
gdjs.New_32scene2Code.GDPlayerHitBoxObjects1= [];
gdjs.New_32scene2Code.GDPlayerHitBoxObjects2= [];
gdjs.New_32scene2Code.GDTiledGrassPlatformObjects1= [];
gdjs.New_32scene2Code.GDTiledGrassPlatformObjects2= [];
gdjs.New_32scene2Code.GDPlayerBulletObjects1= [];
gdjs.New_32scene2Code.GDPlayerBulletObjects2= [];
gdjs.New_32scene2Code.GDbackgrpundObjects1= [];
gdjs.New_32scene2Code.GDbackgrpundObjects2= [];
gdjs.New_32scene2Code.GDNewObject6Objects1= [];
gdjs.New_32scene2Code.GDNewObject6Objects2= [];
gdjs.New_32scene2Code.GDNewObject8Objects1= [];
gdjs.New_32scene2Code.GDNewObject8Objects2= [];
gdjs.New_32scene2Code.GDNewObject7Objects1= [];
gdjs.New_32scene2Code.GDNewObject7Objects2= [];
gdjs.New_32scene2Code.GDcheatObjects1= [];
gdjs.New_32scene2Code.GDcheatObjects2= [];
gdjs.New_32scene2Code.GDstateObjects1= [];
gdjs.New_32scene2Code.GDstateObjects2= [];
gdjs.New_32scene2Code.GDNewObjectObjects1= [];
gdjs.New_32scene2Code.GDNewObjectObjects2= [];
gdjs.New_32scene2Code.GDplayObjects1= [];
gdjs.New_32scene2Code.GDplayObjects2= [];
gdjs.New_32scene2Code.GDquitObjects1= [];
gdjs.New_32scene2Code.GDquitObjects2= [];

gdjs.New_32scene2Code.conditionTrue_0 = {val:false};
gdjs.New_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition1IsTrue_0 = {val:false};


gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.New_32scene2Code.GDplayObjects1});gdjs.New_32scene2Code.eventsList0 = function(runtimeScene) {

{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}}

}


};gdjs.New_32scene2Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.New_32scene2Code.GDplayObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDplayObjects1Objects, runtimeScene, true, false);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32scene2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
}

}


};

gdjs.New_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene2Code.GDPlantObjects1.length = 0;
gdjs.New_32scene2Code.GDPlantObjects2.length = 0;
gdjs.New_32scene2Code.GDPlayerObjects1.length = 0;
gdjs.New_32scene2Code.GDPlayerObjects2.length = 0;
gdjs.New_32scene2Code.GDBulletObjects1.length = 0;
gdjs.New_32scene2Code.GDBulletObjects2.length = 0;
gdjs.New_32scene2Code.GDPlayerHitBoxObjects1.length = 0;
gdjs.New_32scene2Code.GDPlayerHitBoxObjects2.length = 0;
gdjs.New_32scene2Code.GDTiledGrassPlatformObjects1.length = 0;
gdjs.New_32scene2Code.GDTiledGrassPlatformObjects2.length = 0;
gdjs.New_32scene2Code.GDPlayerBulletObjects1.length = 0;
gdjs.New_32scene2Code.GDPlayerBulletObjects2.length = 0;
gdjs.New_32scene2Code.GDbackgrpundObjects1.length = 0;
gdjs.New_32scene2Code.GDbackgrpundObjects2.length = 0;
gdjs.New_32scene2Code.GDNewObject6Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject6Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject8Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject8Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject7Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject7Objects2.length = 0;
gdjs.New_32scene2Code.GDcheatObjects1.length = 0;
gdjs.New_32scene2Code.GDcheatObjects2.length = 0;
gdjs.New_32scene2Code.GDstateObjects1.length = 0;
gdjs.New_32scene2Code.GDstateObjects2.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene2Code.GDplayObjects1.length = 0;
gdjs.New_32scene2Code.GDplayObjects2.length = 0;
gdjs.New_32scene2Code.GDquitObjects1.length = 0;
gdjs.New_32scene2Code.GDquitObjects2.length = 0;

gdjs.New_32scene2Code.eventsList1(runtimeScene);
return;

}

gdjs['New_32scene2Code'] = gdjs.New_32scene2Code;
