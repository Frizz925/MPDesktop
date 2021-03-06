import { 
    UPDATE_PLAYBACK, UPDATE_STATUS, UPDATE_SONG, UPDATE_COVER, UPDATE_SEEK,
    INCREMENT_SEEKER 
} from 'actions';

export default function(state = {}, action) {
    switch (action.type) {
        case UPDATE_PLAYBACK:
            state = action.playback;
            break;
        case UPDATE_STATUS:
            state.current = action.status.time ? Number(action.status.time.match(/(\d+):/)[1]) : 0;
            break;
        case UPDATE_SONG:
            state.duration = action.song.Time;
            break;
        case UPDATE_COVER:
            state.cover = action.cover;
            break;
        case UPDATE_SEEK:
            state.current = action.seek;
            break;
        case INCREMENT_SEEKER:
            if (state.current >= state.duration) return state;
            state.current++;
            break;
        default:
            return state;
    }
    return _.assign({}, state);
}
