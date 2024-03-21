import { PlayerState } from '../../types/CoveyTownSocket';

/**
 * This class is the base class for all enhancement abilities. It is responsible for managing the
 * state of the a player's enhancement. @see GameArea
 */
export default abstract class Enhancement<StateType extends PlayerState> {
  private _currentState: StateType;

  private _timeLeft: number | undefined;

  /**
   * Creates a new enhancement instance.
   * @param initialState State to initialize the the player without consuming any food.
   * @param emitAreaChanged A callback to invoke when the state of the game changes. This is used to notify clients.
   */
  public constructor(initialState: StateType) {
    this._currentState = initialState;
    this._timeLeft = undefined;
  }

  public get timeLeft(): number | undefined {
    return this._timeLeft;
  }

  protected set timeLeft(second: number | undefined) {
    this._timeLeft = second;
  }
}
