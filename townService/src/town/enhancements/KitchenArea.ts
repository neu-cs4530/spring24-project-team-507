import { ITiledMapObject } from '@jonbell/tiled-map-type-guard';
import InvalidParametersError from '../../lib/InvalidParametersError';
import Player from '../../lib/Player';
import {
  BoundingBox,
  InteractableCommand,
  InteractableCommandReturnType,
  KitchenAreaModel,
  TownEmitter,
} from '../../types/CoveyTownSocket';
import InteractableArea from '../InteractableArea';

export default class KitchenArea extends InteractableArea {
  /** The kitchen area is "active" when there are players inside of it */
  public get isActive(): boolean {
    return this._occupants.length > 0;
  }

  /**
   * Creates a new KitchenArea
   *
   * @param kitchenAreaModel model containing this area's ID
   * @param coordinates  the bounding box that defines this kitchen area
   * @param townEmitter a broadcast emitter that can be used to emit updates to players
   */
  public constructor(
    { id }: Omit<KitchenAreaModel, 'type'>,
    coordinates: BoundingBox,
    townEmitter: TownEmitter,
  ) {
    super(id, coordinates, townEmitter);
  }

  /**
   * Removes a player from this kitchen area.
   *
   * Extends the base behavior of InteractableArea to set the topic of this KitchenArea to undefined and
   * emit an update to other players in the town when the last player leaves.
   *
   * @param player
   */
  public remove(player: Player) {
    super.remove(player);
    if (this._occupants.length === 0) {
      this._emitAreaChanged();
    }
  }

  /**
   * Convert this KitchenArea instance to a simple KitchenAreaModel suitable for
   * transporting over a socket to a client.
   */
  public toModel(): KitchenAreaModel {
    return {
      id: this.id,
      occupants: this.occupantsByID,
      type: 'KitchenArea',
    };
  }

  /**
   * Creates a new KitchenArea object that will represent a Kitchen Area object in the town map.
   * @param mapObject An ITiledMapObject that represents a rectangle in which this kitchen area exists
   * @param broadcastEmitter An emitter that can be used by this kitchen area to broadcast updates
   * @returns
   */
  public static fromMapObject(
    mapObject: ITiledMapObject,
    broadcastEmitter: TownEmitter,
  ): KitchenArea {
    const { name, width, height } = mapObject;
    if (!width || !height) {
      throw new Error(`Malformed viewing area ${name}`);
    }
    const rect: BoundingBox = { x: mapObject.x, y: mapObject.y, width, height };
    return new KitchenArea({ id: name, occupants: [] }, rect, broadcastEmitter);
  }

  public handleCommand<
    CommandType extends InteractableCommand,
  >(): InteractableCommandReturnType<CommandType> {
    throw new InvalidParametersError('Unknown command type');
  }
}
