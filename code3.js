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
gdjs.New_32scene2Code.GDdiedtimesObjects1= [];
gdjs.New_32scene2Code.GDdiedtimesObjects2= [];
gdjs.New_32scene2Code.GDNewObject6Objects1= [];
gdjs.New_32scene2Code.GDNewObject6Objects2= [];
gdjs.New_32scene2Code.GDNewObject8Objects1= [];
gdjs.New_32scene2Code.GDNewObject8Objects2= [];
gdjs.New_32scene2Code.GDNewObject7Objects1= [];
gdjs.New_32scene2Code.GDNewObject7Objects2= [];
gdjs.New_32scene2Code.GDNewObject3Objects1= [];
gdjs.New_32scene2Code.GDNewObject3Objects2= [];
gdjs.New_32scene2Code.GDcheatObjects1= [];
gdjs.New_32scene2Code.GDcheatObjects2= [];
gdjs.New_32scene2Code.GDtimelengthObjects1= [];
gdjs.New_32scene2Code.GDtimelengthObjects2= [];
gdjs.New_32scene2Code.GDcalloutObjects1= [];
gdjs.New_32scene2Code.GDcalloutObjects2= [];
gdjs.New_32scene2Code.GDlevelObjects1= [];
gdjs.New_32scene2Code.GDlevelObjects2= [];
gdjs.New_32scene2Code.GDNewObjectObjects1= [];
gdjs.New_32scene2Code.GDNewObjectObjects2= [];
gdjs.New_32scene2Code.GDplayObjects1= [];
gdjs.New_32scene2Code.GDplayObjects2= [];
gdjs.New_32scene2Code.GDquitObjects1= [];
gdjs.New_32scene2Code.GDquitObjects2= [];
gdjs.New_32scene2Code.GDNewObject2Objects1= [];
gdjs.New_32scene2Code.GDNewObject2Objects2= [];
gdjs.New_32scene2Code.GDachievementObjects1= [];
gdjs.New_32scene2Code.GDachievementObjects2= [];
gdjs.New_32scene2Code.GDNewObject4Objects1= [];
gdjs.New_32scene2Code.GDNewObject4Objects2= [];

gdjs.New_32scene2Code.conditionTrue_0 = {val:false};
gdjs.New_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition1IsTrue_0 = {val:false};


gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDplayObjects1Objects = Hashtable.newFrom({"play": gdjs.New_32scene2Code.GDplayObjects1});gdjs.New_32scene2Code.eventsList0 = function(runtimeScene) {

{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene3", false);
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
gdjs.copyArray(runtimeScene.getObjects("achievement"), gdjs.New_32scene2Code.GDachievementObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDachievementObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDachievementObjects1[i].setString("achievement:" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) + "/3");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.New_32scene2Code.GDNewObject4Objects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject4Objects1[i].setString("dead times:" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32scene2Code.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObjectObjects1[i].setOpacity(50);
}
}}

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
gdjs.New_32scene2Code.GDdiedtimesObjects1.length = 0;
gdjs.New_32scene2Code.GDdiedtimesObjects2.length = 0;
gdjs.New_32scene2Code.GDNewObject6Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject6Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject8Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject8Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject7Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject7Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject3Objects2.length = 0;
gdjs.New_32scene2Code.GDcheatObjects1.length = 0;
gdjs.New_32scene2Code.GDcheatObjects2.length = 0;
gdjs.New_32scene2Code.GDtimelengthObjects1.length = 0;
gdjs.New_32scene2Code.GDtimelengthObjects2.length = 0;
gdjs.New_32scene2Code.GDcalloutObjects1.length = 0;
gdjs.New_32scene2Code.GDcalloutObjects2.length = 0;
gdjs.New_32scene2Code.GDlevelObjects1.length = 0;
gdjs.New_32scene2Code.GDlevelObjects2.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene2Code.GDplayObjects1.length = 0;
gdjs.New_32scene2Code.GDplayObjects2.length = 0;
gdjs.New_32scene2Code.GDquitObjects1.length = 0;
gdjs.New_32scene2Code.GDquitObjects2.length = 0;
gdjs.New_32scene2Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject2Objects2.length = 0;
gdjs.New_32scene2Code.GDachievementObjects1.length = 0;
gdjs.New_32scene2Code.GDachievementObjects2.length = 0;
gdjs.New_32scene2Code.GDNewObject4Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject4Objects2.length = 0;

gdjs.New_32scene2Code.eventsList1(runtimeScene);
return;

}

gdjs['New_32scene2Code'] = gdjs.New_32scene2Code;
