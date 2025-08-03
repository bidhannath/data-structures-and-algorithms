/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  let visitedRooms = new Set([0]);
  let iteratorStack = rooms[0];
  while(iteratorStack.length > 0) {
    let room = iteratorStack.shift();
    if(!room) continue;
    for (let i=0; i<rooms[room].length; i++){
      if(!visitedRooms.has(rooms[room][i])) iteratorStack.push(rooms[room][i]);
    }
    visitedRooms.add(room);
  }
  return visitedRooms.size === rooms.length;
};