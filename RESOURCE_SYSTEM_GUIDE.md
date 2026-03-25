# APproval - Student Resource System

This document outlines the new resource recommendation system for students who fail topic quizzes.

## Overview

When a student fails a topic quiz (scores less than 4/5), they will automatically receive curated study resources to help them improve. The system provides:

1. **Khan Academy Resources**: Curated links to specific Khan Academy lessons that match AP CSP topics
2. **Additional Resources**: Supplementary materials from other educational sources 
3. **Custom Teacher Resources**: Resources added by teachers for their specific classes

## Database Schema

### Topic Resources Structure
Each topic document now includes a `resources` object with the following structure:

```json
{
  "resources": {
    "khanAcademy": [
      {
        "title": "Resource Title",
        "url": "https://khanacademy.org/...",
        "type": "article|exercise|video",
        "description": "Description of the resource"
      }
    ],
    "additional": [
      {
        "title": "External Resource",
        "url": "https://example.com/...",
        "type": "external|tutorial|document",
        "description": "Description"
      }
    ],
    "customTeacherResources": [
      {
        "id": "uuid",
        "title": "Teacher Resource",
        "url": "https://example.com/...",
        "type": "article|video|exercise|external|tutorial|document",
        "description": "Description",
        "addedBy": "teacherUserId",
        "addedAt": "2024-01-01T00:00:00.000Z",
        "updatedAt": "2024-01-01T00:00:00.000Z"
      }
    ]
  }
}
```

## Khan Academy Resource Mapping

The system includes comprehensive mappings for all 35 AP CSP topics:

### Big Idea 1: Creative Development
- **1.1 Collaboration**: Collaborative programming, version control
- **1.2 Program Function and Purpose**: Planning programs, documentation
- **1.3 Program Design and Development**: Development process, top-down design
- **1.4 Identifying and Correcting Errors**: Debugging strategies, error types

### Big Idea 2: Data
- **2.1 Binary Numbers**: Number bases, binary/decimal conversion, hexadecimal
- **2.2 Data Compression**: Lossless and lossy compression techniques
- **2.3 Extracting Information from Data**: Data visualization, filtering/cleaning
- **2.4 Using Programs with Data**: Processing data with programs

### Big Idea 3: Algorithms and Programming
- **3.1-3.18**: Complete coverage including variables, data structures, conditionals, loops, algorithms, procedures, libraries, simulations, efficiency, and decidability

### Big Idea 4: Computer Systems and Networks
- **4.1 The Internet**: Internet structure, protocols, DNS
- **4.2 Fault Tolerance**: Redundancy, routing
- **4.3 Parallel and Distributed Computing**: Parallel processing concepts

### Big Idea 5: Impact of Computing
- **5.1-5.6**: Computing innovations, digital divide, bias, crowdsourcing, legal/ethical concerns, cybersecurity

## API Endpoints

### For Students (Quiz Results)
When a student fails a quiz, the quiz submission response now includes:

```json
{
  "success": true,
  "score": 2,
  "passed": false,
  "studyResources": {
    "khanAcademy": [...],
    "additional": [...],
    "customTeacherResources": [...]
  },
  "resourcesMessage": "Here are some resources to help you study:",
  "message": "Keep practicing! You can retake this quiz."
}
```

### For Teachers (Resource Management)

#### Add Custom Resource
```
POST /api/topics/:topicId/resources
```
**Body:**
```json
{
  "title": "Custom Resource Title",
  "url": "https://example.com/resource",
  "type": "article|video|exercise|external|tutorial|document",
  "description": "Description of the resource"
}
```

#### Update Custom Resource
```
PUT /api/topics/:topicId/resources/:resourceId
```
**Body:** Same as add resource

#### Delete Custom Resource
```
DELETE /api/topics/:topicId/resources/:resourceId
```

#### Get All Topic Resources
```
GET /api/topics/:topicId/resources
```

## How It Works

1. **Automatic Resource Delivery**: When a student fails a quiz (score < 4/5), the system automatically includes study resources in the quiz results response.

2. **Progressive Resource Types**: 
   - Khan Academy resources are prioritized as primary study materials
   - Additional external resources provide supplementary content
   - Custom teacher resources allow instructors to add class-specific materials

3. **Resource Validation**: All teacher-added resources undergo validation:
   - URL format validation
   - Resource type validation
   - Required field validation (title, description, URL, type)

4. **Teacher Management**: Teachers can:
   - Add custom resources for any topic
   - Edit their added resources
   - Delete their added resources
   - View all resources for a topic

## Resource Types

- **article**: Educational articles and written content
- **video**: Video tutorials and lectures  
- **exercise**: Interactive exercises and practice problems
- **external**: External websites and tools
- **tutorial**: Step-by-step tutorials
- **document**: PDF documents and reference materials

## Implementation Files

1. **topic-resource-mapping.js**: Contains complete Khan Academy resource mappings
2. **server/routes/quizzes.js**: Updated to include resources in failed quiz responses
3. **server/routes/topics.js**: New API endpoints for resource management
4. **Database**: Topics collection updated with resource data

## Usage Instructions

### For Developers
1. Run `node topic-resource-mapping.js` to populate Khan Academy resources
2. Quiz failure responses automatically include resources
3. Use the new API endpoints for teacher resource management

### For Teachers
1. Navigate to topic management in the admin interface
2. Use the resource management section to add custom materials
3. Resources will automatically appear to students who fail quizzes

### For Students
1. Take topic quizzes as normal
2. If you fail (< 4/5 correct), you'll receive personalized study resources
3. Review the recommended materials before retaking the quiz

This system provides comprehensive study support to help students master AP Computer Science Principles topics through targeted resource recommendations.