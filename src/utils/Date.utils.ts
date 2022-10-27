export class DateUtils {
    private static DATE_FORMATTER = Intl.DateTimeFormat('pt-BR');
    private static DATE_TIME_FORMATTER = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    private static TIME_FORMATTER = Intl.DateTimeFormat('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    static formatDate(date: Date): string {
        return DateUtils.DATE_FORMATTER.format(date);
    }

    static formatDateTime(date: Date): string {
        return DateUtils.DATE_TIME_FORMATTER.format(date);
    }

    static formatTime(date: Date): string {
        return DateUtils.TIME_FORMATTER.format(date);
    }
}
