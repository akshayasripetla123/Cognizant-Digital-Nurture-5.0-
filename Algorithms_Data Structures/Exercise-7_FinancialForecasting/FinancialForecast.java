public class FinancialForecast {

    public static double forecastValue(double currentValue,
                                       double growthRate,
                                       int years) {

        // Base Case
        if (years == 0) {
            return currentValue;
        }

        // Recursive Case
        return forecastValue(currentValue,
                             growthRate,
                             years - 1)
                             * (1 + growthRate);
    }

    public static void main(String[] args) {

        double currentValue = 10000;
        double growthRate = 0.10; // 10%
        int years = 5;

        double futureValue =
                forecastValue(currentValue,
                              growthRate,
                              years);

        System.out.printf(
                "Future Value after %d years = %.2f",
                years,
                futureValue);
    }
}