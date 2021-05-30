module.exports = function(event, world) {
  console.log('VR Template: ${event.name}');
  console.log(event);
  console.log(world);
  if (
    event.name === "playerDidInteract" &&
    event.target.key === "lever1"
  ) {
    world.showNotification('Blahaj is not here!');
  }
}
