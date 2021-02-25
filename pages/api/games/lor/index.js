export default function LegendsFunction(request, response) {
    response.json({game: 'Legends of Runeterra', method: request.method})
}