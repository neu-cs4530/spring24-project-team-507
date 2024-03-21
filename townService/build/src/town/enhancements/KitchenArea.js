import InvalidParametersError from '../../lib/InvalidParametersError';
import InteractableArea from '../InteractableArea';
export default class KitchenArea extends InteractableArea {
    get isActive() {
        return this._occupants.length > 0;
    }
    constructor({ id }, coordinates, townEmitter) {
        super(id, coordinates, townEmitter);
    }
    remove(player) {
        super.remove(player);
        if (this._occupants.length === 0) {
            this._emitAreaChanged();
        }
    }
    toModel() {
        return {
            id: this.id,
            occupants: this.occupantsByID,
            type: 'KitchenArea',
        };
    }
    static fromMapObject(mapObject, broadcastEmitter) {
        const { name, width, height } = mapObject;
        if (!width || !height) {
            throw new Error(`Malformed viewing area ${name}`);
        }
        const rect = { x: mapObject.x, y: mapObject.y, width, height };
        return new KitchenArea({ id: name, occupants: [] }, rect, broadcastEmitter);
    }
    handleCommand() {
        throw new InvalidParametersError('Unknown command type');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2l0Y2hlbkFyZWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdG93bi9lbmhhbmNlbWVudHMvS2l0Y2hlbkFyZWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxzQkFBc0IsTUFBTSxrQ0FBa0MsQ0FBQztBQVN0RSxPQUFPLGdCQUFnQixNQUFNLHFCQUFxQixDQUFDO0FBRW5ELE1BQU0sQ0FBQyxPQUFPLE9BQU8sV0FBWSxTQUFRLGdCQUFnQjtJQUV2RCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQVNELFlBQ0UsRUFBRSxFQUFFLEVBQWtDLEVBQ3RDLFdBQXdCLEVBQ3hCLFdBQXdCO1FBRXhCLEtBQUssQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFVTSxNQUFNLENBQUMsTUFBYztRQUMxQixLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQU1NLE9BQU87UUFDWixPQUFPO1lBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQzdCLElBQUksRUFBRSxhQUFhO1NBQ3BCLENBQUM7SUFDSixDQUFDO0lBUU0sTUFBTSxDQUFDLGFBQWEsQ0FDekIsU0FBMEIsRUFDMUIsZ0JBQTZCO1FBRTdCLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLElBQUksRUFBRSxDQUFDLENBQUM7U0FDbkQ7UUFDRCxNQUFNLElBQUksR0FBZ0IsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDNUUsT0FBTyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFTSxhQUFhO1FBR2xCLE1BQU0sSUFBSSxzQkFBc0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzNELENBQUM7Q0FDRiJ9