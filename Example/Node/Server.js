var Socket = require('./Socket')
var Server = module.exports;
var ss = require('socket.io-stream');

Server.auth = function(socket, next)
{	
	if(socket.handshake.query.login==="hello")
		next();
	else
		next(new Error("unauthorized"));
}

Server.connect = function(socket)
{
	console.log ( "Client Connected :", socket.client.conn.remoteAddress, "ON", socket.nsp.name);
	
	ss(socket).on('Send Stream', Socket.receiveStream);
	
	socket.on('disconnect', Socket.disconnect);
	
	socket.on('message', Socket.message);
	
	socket.on('EventWithNoAckAndTable', Socket.eventWithNoAckAndTable);
	
	socket.on('EventWithNoAckAndDic', Socket.eventWithNoAckAndDic);

	socket.on('EventWithSimpleAckAndDic', Socket.eventWithSimpleAckAndDic);
	
	socket.on('EventWithBinaryAckAndDic', Socket.eventWithBinaryAckAndDic);
	
	socket.on('EventAskSimpleEventWithNoAck', Socket.eventAskSimpleEventWithNoAck);
	
	socket.on('EventAskBinaryEventWithNoAck', Socket.eventAskBinaryEventWithNoAck);
	
	socket.on('EventAskSimpleEventWithSimpleAck', Socket.eventAskSimpleEventWithSimpleAck);
	
	socket.on('EventAskSimpleEventWithBinaryAck', Socket.eventAskSimpleEventWithBinaryAck);
	
	socket.on('EventAskBinaryEventWithSimpleAck', Socket.eventAskBinaryEventWithSimpleAck);
	
	socket.on('EventAskBinaryEventWithBinaryAck', Socket.eventAskBinaryEventWithBinaryAck);

	socket.on('EventAskBinaryMessageWithNoAck', Socket.binaryMessageWithNoAck);
	
	socket.on('EventAskBinaryMessageWithBinaryAck', Socket.binaryMessageWithBinaryAck);
	
	socket.on('EventAskSendStream', Socket.sendStream);
}
