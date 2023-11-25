public class Service
{
    public Result CalculateProfitability(Input input)
    {
        decimal distanceCost = input.Kilometers * input.PricePerKilometer;
        decimal timeCost = input.Hours * input.PricePerHour;

        decimal totalDistanceCost = distanceCost;
        decimal totalTimeCost = timeCost;

        decimal income = input.Income;
        decimal profitability = income - (totalDistanceCost + totalTimeCost);

        return new Result
        {
            TotalDistanceCost = totalDistanceCost,
            TotalTimeCost = totalTimeCost,
            Income = income,
            Profitability = profitability
        };
    }
}
