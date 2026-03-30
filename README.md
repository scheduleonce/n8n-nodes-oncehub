# n8n-nodes-oncehub

This is an n8n community node. It lets you use OnceHub in your n8n workflows.

OnceHub is a scheduling platform that enables businesses to automate meeting scheduling, manage bookings, and streamline customer interactions.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Resources](#resources)  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

The OnceHub Trigger node supports the following webhook events:

| Event | Description |
|-------|-------------|
| **Booking Scheduled** | Triggers when a new booking is scheduled |
| **Booking Canceled** | Triggers when an existing booking is cancelled |
| **Booking Rescheduled** | Triggers when a booking is rescheduled |
| **Booking Reassigned** | Triggers when a booking calendar booking is reassigned |
| **Booking Completed** | Triggers when the date and time for a booking has passed |
| **Booking No-Show** | Triggers when the status of a booking is set to "No-show" |
| **Booking Reschedule Requested** | Triggers when a user requests a guest to reschedule |

## Credentials

To use this node, you need to authenticate with OnceHub using an API key of the OnceHub account.

### Prerequisites

1. Sign up for a [OnceHub](https://www.oncehub.com/) account
2. Navigate to your OnceHub integrations settings

### Setting up API Key Authentication

1. In OnceHub, go to **Integrations** > **API & Webhooks**
2. Generate or copy your API key
3. In n8n, create new OnceHub API credentials
4. Paste your API key into the **API Key** field

## Compatibility

This node was developed and tested with n8n version 2.13.3 and above.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [OnceHub API Documentation](https://developers.oncehub.com/)
* [OnceHub Website](https://www.oncehub.com/)


## License

This project is licensed under the terms of the MIT open source license. Please refer to [MIT](LICENSE) for the full terms.

## Support

- **Documentation**: [OnceHub API Docs](https://developers.oncehub.com)
- **Issues**: [GitHub Issues](https://github.com/scheduleonce/n8n-nodes-oncehub/issues)
- **Community**: [n8n Community Forum](https://community.n8n.io)

## Acknowledgments

- [n8n](https://n8n.io/) - For creating an amazing workflow automation platform
- [OnceHub](https://www.oncehub.com/) - For providing comprehensive API documentation and developer resources
- [n8n Community](https://community.n8n.io/) - For feedback, contributions, and support
- All contributors who help improve this node

---

**Made by the Oncehub team**