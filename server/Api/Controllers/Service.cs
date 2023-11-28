public class Service
{
    public Result CalculateProfitability(Input input)
    {
        decimal distanceCost = input.Kilometers * input.PricePerKilometer;
        decimal timeCost = input.Hours * input.PricePerHour;

        decimal totalDistanceCost = distanceCost;
        decimal totalTimeCost = timeCost;

        decimal income = input.Income;
        decimal profitabilityWithoutMargin = income - (totalDistanceCost + totalTimeCost);

        decimal targetProfit = income * input.TargetProfitMargin / 100;

        decimal profitabilityWithMargin = profitabilityWithoutMargin + targetProfit;

        return new Result
        {
            TotalDistanceCost = totalDistanceCost,
            TotalTimeCost = totalTimeCost,
            Income = income,
            ProfitabilityWithoutMargin = profitabilityWithoutMargin,
            ProfitabilityWithMargin = profitabilityWithMargin
        };
    }
}