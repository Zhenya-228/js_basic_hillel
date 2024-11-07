function groupNotificationsBySource(notifications) {
  return notifications.reduce((result, notification) => {
      const { source, ...rest } = notification;
      if (!result[source]) {
          result[source] = [];
      }
      result[source].push(rest);
      return result;
  }, {});
}
console.log(groupNotificationsBySource([
  { source: 'source1', text: 'New email from John', date: '2024-11-01' },
  { source: 'source2', text: 'New SMS from Anna', date: '2024-11-02' },
  { source: 'source3', text: 'Newsletter subscription', date: '2024-11-03' },
  { source: 'source4', text: 'New push notification', date: '2024-11-04' },
]));