export default class Enhancement {
    _currentState;
    _timeLeft;
    constructor(initialState) {
        this._currentState = initialState;
        this._timeLeft = undefined;
    }
    get state() {
        return this._currentState;
    }
    set state(newState) {
        this._currentState = newState;
    }
    set timeLeft(second) {
        this._timeLeft = second;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5oYW5jZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdG93bi9lbmhhbmNlbWVudHMvRW5oYW5jZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUEsTUFBTSxDQUFDLE9BQU8sT0FBZ0IsV0FBVztJQUMvQixhQUFhLENBQVk7SUFFekIsU0FBUyxDQUFxQjtJQU90QyxZQUFtQixZQUF1QjtRQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFjLEtBQUssQ0FBQyxRQUFtQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBTUQsSUFBYyxRQUFRLENBQUMsTUFBYztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0NBQ0YifQ==