// ? Move to Mutations for recent-kills

export function fetchEquipmentImages(data) {
	let equipment = {};

	if (data.Equipment.MainHand === null) equipment.mainHand = require("@/assets/placeholder.png");
	else
		equipment.mainHand = `https://render.albiononline.com/v1/item/${data.Equipment.MainHand.Type}.png`;

	if (data.Equipment.OffHand === null) equipment.offHand = require("@/assets/placeholder.png");
	else
		equipment.offHand = `https://render.albiononline.com/v1/item/${data.Equipment.OffHand.Type}.png`;

	if (data.Equipment.Head === null) equipment.head = require("@/assets/placeholder.png");
	else equipment.head = `https://render.albiononline.com/v1/item/${data.Equipment.Head.Type}.png`;

	if (data.Equipment.Armor === null) equipment.armor = require("@/assets/placeholder.png");
	else equipment.armor = `https://render.albiononline.com/v1/item/${data.Equipment.Armor.Type}.png`;

	if (data.Equipment.Shoes === null) equipment.shoes = require("@/assets/placeholder.png");
	else equipment.shoes = `https://render.albiononline.com/v1/item/${data.Equipment.Shoes.Type}.png`;

	if (data.Equipment.Cape === null) equipment.cape = require("@/assets/placeholder.png");
	else equipment.cape = `https://render.albiononline.com/v1/item/${data.Equipment.Cape.Type}.png`;

	if (data.Equipment.Bag === null) equipment.bag = require("@/assets/placeholder.png");
	else equipment.bag = `https://render.albiononline.com/v1/item/${data.Equipment.Bag.Type}.png`;

	if (data.Equipment.Food === null) equipment.food = require("@/assets/placeholder.png");
	else equipment.food = `https://render.albiononline.com/v1/item/${data.Equipment.Food.Type}.png`;

	if (data.Equipment.Mount === null) equipment.mount = require("@/assets/placeholder.png");
	else equipment.mount = `https://render.albiononline.com/v1/item/${data.Equipment.Mount.Type}.png`;

	if (data.Equipment.Potion === null) equipment.potion = require("@/assets/placeholder.png");
	else
		equipment.potion = `https://render.albiononline.com/v1/item/${data.Equipment.Potion.Type}.png`;

	return equipment;
}
