export default function LeagueFunction(request, response) {
    response.json({game: 'League of Legends', method: request.method})
}