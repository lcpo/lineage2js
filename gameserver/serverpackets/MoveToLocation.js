var ServerPacket = require("./ServerPacket.js");

function MoveToLocation(positions, object) {
	this._packet = new ServerPacket(30);
	this._packet.writeC(0x01)
		.writeD(object.getObjectId())
		.writeD(positions.target.x)
		.writeD(positions.target.y)
		.writeD(positions.target.z)
		.writeD(positions.origin.x)
		.writeD(positions.origin.y)
		.writeD(positions.origin.z)
		
	return this._packet.getBuffer();
}

module.exports = MoveToLocation;