function groupNotificationsBySource(notifications) {
    const grouped = notifications.reduce((result, notification) => {
      const { source, ...rest } = notification;
      if (!result[source]) {
        result[source] = [];
      }
      result[source].push(rest);
      return result;
    }, {});

    grouped[Symbol.iterator] = function* () {
      for (const source in this) {
        if (Array.isArray(this[source])) {
          yield* this[source];
        }
      }
    };
  
    return grouped;
  }
  
const notifications = groupNotificationsBySource([
    { source: 'source1', text: 'New email from John', date: '2024-11-01' },
    { source: 'source2', text: 'New SMS from Anna', date: '2024-11-02' },
    { source: 'source3', text: 'Newsletter subscription', date: '2024-11-03' },
    { source: 'source4', text: 'New push notification', date: '2024-11-04' },
  ]);
  
  for (const notification of notifications) {
    console.log(notification); // Має виводити кожне сповіщення як елемент плоского масиву
  }